pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}
