pipeline {
  agent any

  environment {
    CI = 'true'
  }

  options {
    skipDefaultCheckout()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci' // make sure package-lock.json is committed
      }
    }

    stage('Run Cypress Tests') {
      steps {
        bat 'npx cypress run'
      }
    }
  }

  post {
    always {
      script {
        echo "Build finished with status: ${currentBuild.currentResult}"
      }
    }
    success {
      githubNotify context: 'Cypress Tests', status: 'SUCCESS', description: 'Tests passed'
    }
    failure {
      githubNotify context: 'Cypress Tests', status: 'FAILURE', description: 'Tests failed'
    }
  }
}
