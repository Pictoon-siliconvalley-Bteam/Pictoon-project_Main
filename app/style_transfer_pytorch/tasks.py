import time
import random
import datetime

from io import BytesIO
from celery import Celery, current_task, shared_task
from celery.result import AsyncResult
from style_transfer.cli import *
import time

REDIS_URL = 'redis://redis:6379/0'
BROKER_URL = 'amqp://user:pass@rabbit:5672//'

CELERY = Celery('tasks',backend=REDIS_URL ,broker=BROKER_URL)
CELERY.conf.accept_content = ['json', 'msgpack']
CELERY.conf.result_serializer = 'msgpack'
CELERY.conf.update(
    broker_pool_limit=None,
    task_acks_late=True,
    broker_heartbeat=None,
    worker_prefetch_multiplier=1,
    task_track_started=True,
    worker_send_task_events=True,
    task_send_sent_event=True,
    result_expires=86400,  # one day,
    task_serializer="json",
    result_serializer="json",
    accept_content=['json', 'msgpack'],
    timezone="Asia/Seoul",
    enable_utc=False
)

def get_job(job_id):
    return AsyncResult(job_id, app=CELERY)


@shared_task
def start():
    main()
    return 3


@CELERY.task()
def test():
    print('1111')
    time.sleep(10)
    print('test')
