from pathlib import Path
import os
from datetime import timedelta
from decouple import config

## For CKEditor
# import logging
# logging.getLogger('ckeditor').setLevel(logging.ERROR)


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-a6j*0!5-r)m)0xn%ojlk3u^5-q5*6m5go0(7i!0yvf^zgbabh-'
SECRET_KEY = config('SECRET_KEY')



# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', default=False, cast=bool)



# ALLOWED_HOSTS = ["https://digital.ahm.packaging.com"]
ALLOWED_HOSTS = ['*']



## For Custom Apps Creat (apps/my_apps )
CUSTOM_APPS = [
    'apps.core.apps.CoreConfig',
    'apps.dashboards.apps.DashboardsConfig',
    'apps.users.apps.UsersConfig',
    'apps.employee.apps.EmployeeConfig',
    'apps.student.apps.StudentConfig',

]


## For Third Party Apps
THIRD_PARTY_APPS = [

    ## For Ckeditor
    # 'ckeditor', 
    # 'ckeditor_uploader',



]


# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',

] + CUSTOM_APPS + THIRD_PARTY_APPS


## For Custom User Model
AUTH_USER_MODEL = 'users.User'
swappable = 'AUTH_USER_MODEL'



MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]



ROOT_URLCONF = 'django_setting_core.urls'

# TEMPLATES_BASE_DIR = BASE_DIR /'apps'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # 'DIRS': [os.path.join(BASE_DIR, 'templates')],

        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
            os.path.join(BASE_DIR, 'apps/dashboards/templates'),
            os.path.join(BASE_DIR, 'apps/auth/templates'),
            os.path.join(BASE_DIR, 'apps/admin/templates'),
            os.path.join(BASE_DIR, 'apps/employee/templates'),
            os.path.join(BASE_DIR, 'apps/student/templates'),

        ],

        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]



WSGI_APPLICATION = 'django_setting_core.wsgi.application'




# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql",
#         "NAME": config('DB_NAME'),
#         "USER": config('DB_USER'),
#         "PASSWORD": config('DB_PASSWORD'),
#         "HOST": config('DB_HOST'),
#         "PORT": config('DB_PORT'),

#     }
# }




# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

# TIME_ZONE = 'UTC'
TIME_ZONE = 'Asia/Dhaka'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

## For CKEditor integration
# STATIC_URL = 'static/'
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'static'),
# ]
# STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')


STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

# STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_ROOT = os.path.join(BASE_DIR, 'static_root')




MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')





# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

DEFAULT_PAGINATION_LIMIT = 2
FORM_RENDERER = 'django_setting_core.forms.CustomDivFormRenderer'


REMEMBER_ME_EXPIRY = 60 * 60 * 24 * 30  # 30 days in seconds

OTP_TIMEOUT = 3  ## OTP timeout set 3 minutes





# ## Email Configuration
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

# EMAIL_HOST = config('EMAIL_HOST', default='localhost')
# EMAIL_PORT = config('EMAIL_PORT', default=25, cast=int)
# EMAIL_USE_TLS = config('EMAIL_USE_TLS', default=False, cast=bool)

# EMAIL_HOST_USER = config('EMAIL_HOST_USER', default='')
# EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD', default='')




# ## SMS Service Configuration (Message Send)
# SMS_PROVIDER = config('SMS_PROVIDER', default='')
# TWILIO_ACCOUNT_SID  = config('TWILIO_ACCOUNT_SID', default='')
# TWILIO_AUTH_TOKEN   = config('TWILIO_AUTH_TOKEN', default='')
# TWILIO_PHONE_NUMBER = config('TWILIO_PHONE_NUMBER', default='')



## For CkEditor
# CKEDITOR_BASEPATH = "/static/ckeditor/ckeditor/"
# CKEDITOR_UPLOAD_PATH = "uploads/"

# CKEDITOR_CONFIGS = {
#     'default': {
#         'toolbar': 'full',
#         # 'width': 1200,        
#         # 'height': 800,
#         'extraPlugins': ','.join(
#             [
#                 # 'widget',

#                 # 'html5video',  ## For HTML5 video added with your CkEditors
#                 # 'youtube',  ## For YouTube video added with your CkEditors

#             ]
#         ),
#     },
# }



## AWS S3 Configuration
# DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
# # STATICFILES_STORAGE = 'storages.backends.s3boto3.S3StaticStorage'

# AWS_S3_SIGNATURE_VERSION = "s3v4"
# AWS_S3_FILE_OVERWRITE = True

# AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID', default='')
# AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY', default='')
# AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME', default='')
# AWS_S3_REGION_NAME   = config('AWS_S3_REGION_NAME', default='')
# AWS_S3_ENDPOINT_URL  = config('AWS_S3_ENDPOINT_URL', default='')
# AWS_S3_CUSTOM_DOMAIN = config('AWS_S3_CUSTOM_DOMAIN', default='')





## Social Login 

# GOOGLE_CLIENT_ID = config('GOOGLE_CLIENT_ID', default='')
# GOOGLE_CLIENT_SECRET = config('GOOGLE_CLIENT_SECRET', default='')

# FACEBOOK_CLIENT_ID = config('FACEBOOK_CLIENT_ID', default='')
# FACEBOOK_CLIENT_SECRET = config('FACEBOOK_CLIENT_SECRET', default='')

# INSTAGRAM_CLIENT_ID = config('INSTAGRAM_CLIENT_ID', default='')
# INSTAGRAM_CLIENT_SECRET = config('INSTAGRAM_CLIENT_SECRET', default='')