#!/usr/bin/env python3
"""
Submit DigitalMads URLs to IndexNow (Bing, Copilot, ChatGPT Search, Yandex, etc.)
This triggers immediate re-crawling and indexing within minutes.
"""
import json
import urllib.request
import urllib.error

INDEXNOW_KEY = "4a9b8c7d6e5f0123456789abcdef0123"
HOST = "digitalmads.net"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"

URLS_TO_INDEX = [
    f"https://{HOST}/",
    f"https://{HOST}/bogota",
    f"https://{HOST}/cotizador",
    f"https://{HOST}/contacto",
    f"https://{HOST}/servicios/auditoria-ia",
    f"https://{HOST}/servicios/desarrollo-llm",
    f"https://{HOST}/servicios/automatizacion-workflows",
    f"https://{HOST}/servicios/consultoria-ia",
    f"https://{HOST}/integraciones/whatsapp",
    f"https://{HOST}/blog",
    f"https://{HOST}/blog/cuanto-cuesta-desarrollar-agente-ia-colombia-precios-2027",
    f"https://{HOST}/blog/tendencias-agentes-ia-automatizacion-empresas-colombia-2027",
    f"https://{HOST}/blog/arquitectura-sistemas-multi-agente-ia-empresas-2027",
    f"https://{HOST}/blog/guia-ley-1581-habeas-data-inteligencia-artificial",
    f"https://{HOST}/blog/checklist-tecnico-auditoria-proyectos-ia-empresas",
    f"https://{HOST}/blog/conectar-agente-ia-whatsapp-siigo-hubspot-colombia",
    f"https://{HOST}/blog/como-implementar-agente-ia-whatsapp-crm-colombia",
    f"https://{HOST}/blog/agentes-ia-reduccion-costos-operativos-colombia",
    f"https://{HOST}/blog/nearshore-ai-development-colombia-us-startups",
    f"https://{HOST}/blog/automatizacion-cobranza-cartera-agentes-ia-colombia-2027",
    f"https://{HOST}/blog/agentes-ia-clinicas-sector-salud-colombia-2027",
    f"https://{HOST}/blog/agentes-ia-ecommerce-retail-colombia-2027"
]

def submit():
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": URLS_TO_INDEX
    }
    
    data = json.dumps(payload).encode("utf-8")
    endpoints = [
        "https://api.indexnow.org/indexnow",
        "https://www.bing.com/indexnow"
    ]
    
    print(f"Submitting {len(URLS_TO_INDEX)} URLs to IndexNow...")
    
    for endpoint in endpoints:
        req = urllib.request.Request(
            endpoint,
            data=data,
            headers={
                "Content-Type": "application/json; charset=utf-8",
                "User-Agent": "DigitalMads-IndexNow-Client/1.0"
            },
            method="POST"
        )
        try:
            with urllib.request.urlopen(req) as resp:
                print(f"[{endpoint}] Status: {resp.status} {resp.reason}")
        except urllib.error.HTTPError as e:
            print(f"[{endpoint}] HTTP Error {e.code}: {e.read().decode('utf-8')}")
        except Exception as e:
            print(f"[{endpoint}] Connection failed: {e}")

if __name__ == "__main__":
    submit()
