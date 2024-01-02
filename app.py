from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from api_routes import router as api_router
from page_routes import router as page_router

app = FastAPI()

app.include_router(api_router)
app.include_router(page_router)

app.mount("/static", StaticFiles(directory="static"), name="static")