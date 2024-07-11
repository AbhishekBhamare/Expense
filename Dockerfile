# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest


# Copy the initialization SQL scripts to the Docker entrypoint
COPY ./sql /docker-entrypoint-initdb.d/
