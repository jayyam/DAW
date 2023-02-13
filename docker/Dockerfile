FROM php:7.4-apache-buster

RUN apt-get update && apt-get install -y \
    libpq-dev \
&& docker-php-ext-install pgsql\
RUN a2enmod rewrite
COPY 000-default.conf /etc/apache2/sites-available/
COPY /web/index.php /var/www/html/
COPY /web/index.html /var/www/html/
CMD ["apachectl", "-D", "FOREGROUND"]

