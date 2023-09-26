FROM mcr.microsoft.com/playwright:v1.27.0-focal

# Set the work directory for the application
WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY package.json /app/
COPY playwright.config.js /app/
COPY helper/ /app/helper
COPY src/ /app/src/
COPY test_suites/ /app/test_suites/

# Get the needed libraries to run Playwright
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

EXPOSE 9323

# Install the dependencies in Node environment
RUN npm install
RUN npx playwright install

RUN npm run env:prod

CMD ["npx", "playwright", "show-report", "--host", "0.0.0.0"]