# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest

# Copy the initialization SQL script to the Docker entrypoint
COPY ./init.sql /docker-entrypoint-initdb.d/
