import os
import sys
import json
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings("ignore")

from google.oauth2 import service_account
from googleapiclient.discovery import build
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
    OrderBy,
)

SERVICE_ACCOUNT_FILE = "/Users/fabianperez/Documents/pauta virtual/service_account.json"
GA4_PROPERTY_ID = "546079257"
GSC_SITE_URL = "sc-domain:digitalmads.net"

print("==================================================")
print("   AUDITORÍA INTEGRAL GSC + GA4: DIGITALMADS.NET")
print("==================================================")

# --- 1. SEARCH CONSOLE AUDIT ---
gsc_credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE,
    scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
)
webmasters_service = build("searchconsole", "v1", credentials=gsc_credentials)

# A. Sitemaps
print("\n--- 1.1 Sitemaps en GSC ---")
try:
    sitemaps = webmasters_service.sitemaps().list(siteUrl=GSC_SITE_URL).execute()
    sitemap_entries = sitemaps.get("sitemap", [])
    if not sitemap_entries:
        print("⚠️ No hay sitemaps registrados en Search Console!")
    else:
        for sm in sitemap_entries:
            path = sm.get("path")
            last_submitted = sm.get("lastSubmitted")
            last_downloaded = sm.get("lastDownloaded")
            warnings_count = sm.get("warnings", 0)
            errors_count = sm.get("errors", 0)
            contents = sm.get("contents", [])
            print(f"Path: {path}")
            print(f"  Último envío: {last_submitted} | Descarga: {last_downloaded}")
            print(f"  Errores: {errors_count} | Advertencias: {warnings_count}")
            for c in contents:
                print(f"  Tipo: {c.get('type')} | Enviadas: {c.get('submitted')} | Indexadas: {c.get('indexed')}")
except Exception as e:
    print(f"Error consultando sitemaps: {e}")

# B. GSC Totales Últimos 90 Días
print("\n--- 1.2 Métricas Generales GSC (Últimos 90 Días) ---")
today = datetime.now().date()
start_90 = (today - timedelta(days=90)).strftime("%Y-%m-%d")
end_date = (today - timedelta(days=2)).strftime("%Y-%m-%d")  # GSC tiene ~2 días de lag

try:
    body_overall = {
        "startDate": start_90,
        "endDate": end_date,
        "dimensions": ["date"]
    }
    resp_overall = webmasters_service.searchanalytics().query(siteUrl=GSC_SITE_URL, body=body_overall).execute()
    rows_overall = resp_overall.get("rows", [])
    total_clicks = sum(r.get("clicks", 0) for r in rows_overall)
    total_impressions = sum(r.get("impressions", 0) for r in rows_overall)
    avg_ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
    avg_pos = (sum(r.get("position", 0) * r.get("impressions", 0) for r in rows_overall) / total_impressions) if total_impressions > 0 else 0
    print(f"Periodo: {start_90} al {end_date}")
    print(f"Total Clics: {total_clicks}")
    print(f"Total Impresiones: {total_impressions}")
    print(f"CTR Promedio: {avg_ctr:.2f}%")
    print(f"Posición Media: {avg_pos:.1f}")
except Exception as e:
    print(f"Error consultando totales GSC: {e}")

# C. Top Queries en GSC
print("\n--- 1.3 Top Consultas / Palabras Clave en GSC ---")
try:
    body_queries = {
        "startDate": start_90,
        "endDate": end_date,
        "dimensions": ["query"],
        "rowLimit": 25
    }
    resp_queries = webmasters_service.searchanalytics().query(siteUrl=GSC_SITE_URL, body=body_queries).execute()
    rows_q = resp_queries.get("rows", [])
    if not rows_q:
        print("No hay consultas con impresiones registradas en este periodo.")
    else:
        print(f"{'Query':<45} | {'Clics':<6} | {'Impr':<6} | {'CTR':<7} | {'Pos':<6}")
        print("-" * 75)
        for r in rows_q:
            q = r['keys'][0]
            clicks = r.get('clicks', 0)
            impr = r.get('impressions', 0)
            ctr = r.get('ctr', 0) * 100
            pos = r.get('position', 0)
            print(f"{q:<45} | {clicks:<6} | {impr:<6} | {ctr:.1f}%   | {pos:<6.1f}")
except Exception as e:
    print(f"Error consultando queries: {e}")

# D. Top Páginas en GSC
print("\n--- 1.4 Top Páginas con Impresiones en GSC ---")
try:
    body_pages = {
        "startDate": start_90,
        "endDate": end_date,
        "dimensions": ["page"],
        "rowLimit": 25
    }
    resp_pages = webmasters_service.searchanalytics().query(siteUrl=GSC_SITE_URL, body=body_pages).execute()
    rows_p = resp_pages.get("rows", [])
    if not rows_p:
        print("No hay páginas con impresiones registradas en este periodo.")
    else:
        print(f"{'URL':<60} | {'Clics':<6} | {'Impr':<6} | {'CTR':<7} | {'Pos':<6}")
        print("-" * 90)
        for r in rows_p:
            p = r['keys'][0].replace("https://digitalmads.net", "")
            clicks = r.get('clicks', 0)
            impr = r.get('impressions', 0)
            ctr = r.get('ctr', 0) * 100
            pos = r.get('position', 0)
            print(f"{p:<60} | {clicks:<6} | {impr:<6} | {ctr:.1f}%   | {pos:<6.1f}")
except Exception as e:
    print(f"Error consultando páginas: {e}")

# E. Países en GSC
print("\n--- 1.5 Países con Impresiones en GSC ---")
try:
    body_countries = {
        "startDate": start_90,
        "endDate": end_date,
        "dimensions": ["country"],
        "rowLimit": 10
    }
    resp_countries = webmasters_service.searchanalytics().query(siteUrl=GSC_SITE_URL, body=body_countries).execute()
    for r in resp_countries.get("rows", []):
        c = r['keys'][0]
        clicks = r.get('clicks', 0)
        impr = r.get('impressions', 0)
        pos = r.get('position', 0)
        print(f" - {c}: {clicks} clics, {impr} impresiones, pos {pos:.1f}")
except Exception as e:
    print(f"Error países GSC: {e}")


# --- 2. GOOGLE ANALYTICS 4 AUDIT ---
print("\n==================================================")
print("           2. MÉTRICAS DE GOOGLE ANALYTICS 4      ")
print("==================================================")

ga4_client = BetaAnalyticsDataClient.from_service_account_file(SERVICE_ACCOUNT_FILE)

# A. Canales de Adquisición (Últimos 90 días)
print("\n--- 2.1 Adquisición de Tráfico por Canal (Últimos 90 días) ---")
try:
    req_channels = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name="sessionDefaultChannelGroup")],
        metrics=[
            Metric(name="sessions"),
            Metric(name="activeUsers"),
            Metric(name="newUsers"),
            Metric(name="engagementRate"),
            Metric(name="averageSessionDuration")
        ],
        date_ranges=[DateRange(start_date="90daysAgo", end_date="today")],
    )
    resp_ch = ga4_client.run_report(req_channels)
    print(f"{'Canal':<22} | {'Sesiones':<8} | {'Usuarios':<8} | {'Nuevos':<8} | {'Eng. Rate':<10} | {'Duración':<8}")
    print("-" * 75)
    for row in resp_ch.rows:
        ch = row.dimension_values[0].value
        sess = row.metric_values[0].value
        users = row.metric_values[1].value
        new_u = row.metric_values[2].value
        eng_rate = float(row.metric_values[3].value) * 100
        duration = float(row.metric_values[4].value)
        print(f"{ch:<22} | {sess:<8} | {users:<8} | {new_u:<8} | {eng_rate:>8.1f}% | {duration:>6.1f}s")
except Exception as e:
    print(f"Error GA4 canales: {e}")

# B. Landing Pages
print("\n--- 2.2 Páginas de Destino Más Visitadas (Landing Pages) ---")
try:
    req_landing = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name="landingPage")],
        metrics=[
            Metric(name="sessions"),
            Metric(name="activeUsers"),
            Metric(name="engagementRate"),
            Metric(name="screenPageViews")
        ],
        date_ranges=[DateRange(start_date="90daysAgo", end_date="today")],
        limit=15
    )
    resp_land = ga4_client.run_report(req_landing)
    print(f"{'Landing Page':<40} | {'Sesiones':<8} | {'Usuarios':<8} | {'Vistas':<8} | {'Eng. Rate'}")
    print("-" * 78)
    for row in resp_land.rows:
        lp = row.dimension_values[0].value
        sess = row.metric_values[0].value
        u = row.metric_values[1].value
        rate = float(row.metric_values[2].value) * 100
        views = row.metric_values[3].value
        print(f"{lp:<40} | {sess:<8} | {u:<8} | {views:<8} | {rate:>7.1f}%")
except Exception as e:
    print(f"Error GA4 landing pages: {e}")

# C. Eventos Registrados en GA4
print("\n--- 2.3 Eventos Recibidos en GA4 ---")
try:
    req_events = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name="eventName")],
        metrics=[
            Metric(name="eventCount"),
            Metric(name="totalUsers")
        ],
        date_ranges=[DateRange(start_date="90daysAgo", end_date="today")],
    )
    resp_ev = ga4_client.run_report(req_events)
    for row in resp_ev.rows:
        ev_name = row.dimension_values[0].value
        count = row.metric_values[0].value
        users = row.metric_values[1].value
        print(f" - {ev_name:<25}: {count} veces ({users} usuarios)")
except Exception as e:
    print(f"Error GA4 eventos: {e}")

# D. Países en GA4
print("\n--- 2.4 Países de los Usuarios en GA4 ---")
try:
    req_geo = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name="country")],
        metrics=[Metric(name="activeUsers"), Metric(name="sessions")],
        date_ranges=[DateRange(start_date="90daysAgo", end_date="today")],
        limit=10
    )
    resp_geo = ga4_client.run_report(req_geo)
    for row in resp_geo.rows:
        country = row.dimension_values[0].value
        u = row.metric_values[0].value
        sess = row.metric_values[1].value
        print(f" - {country:<20}: {u} usuarios, {sess} sesiones")
except Exception as e:
    print(f"Error GA4 geo: {e}")

print("\n==================================================")
print("           FIN DE AUDITORÍA GSC + GA4             ")
print("==================================================")
