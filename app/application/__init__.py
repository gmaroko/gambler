from flask import Flask
import logging
from flask.ext.cache import Cache
from flask.ext.sqlalchemy import SQLAlchemy

# resolve import error
import sys
sys.path.insert(0, "C:\\Users\\Makiwa\\Desktop\\Hack\\gambler\\app\\application")
import views

app = Flask('application')

# app.config.from_object('config.ProductionConfig')
app.config.from_object('config.DevelopmentConfig')

db = SQLAlchemy(app)

cache = Cache(app, config={'CACHE_TYPE': 'simple'})
cache.init_app(app)



logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

import views
