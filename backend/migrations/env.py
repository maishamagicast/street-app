import os
from models.user_model import User
from logging.config import fileConfig
from alembic import context
from sqlalchemy import engine_from_config, pool

from extensions import db
from models.ngo_model import NGO
from models.report_model import Report

config = context.config
fileConfig(config.config_file_name)

# Use your SQLAlchemy metadata
target_metadata = db.Model.metadata

# Set DATABASE_URL from environment variable if available
DATABASE_URL = os.environ.get("DB_URI")
if DATABASE_URL:
    config.set_main_option("sqlalchemy.url", DATABASE_URL)


def run_migrations_offline():
    url = config.get_main_option("sqlalchemy.url")
    context.configure(url=url, target_metadata=target_metadata, literal_binds=True)
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    connectable = engine_from_config(
        config.get_section(config.config_ini_section),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
