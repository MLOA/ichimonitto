#flask_app.wsgi
import os,sys

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from ichimonitto import app as application
