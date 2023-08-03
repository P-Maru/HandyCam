# your_project_name/routing.py

from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from post import consumers

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        path("ws/translate/", consumers.TranslateConsumer.as_asgi()),
    ]),
})
