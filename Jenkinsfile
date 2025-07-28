pipeline {
  agent any

  triggers {
    // This enables automatic triggering for GitHub PRs
    githubPullRequest()
  }

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
        bat 'npm ci' // ensure package-lock.json is committed
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
        // Optional: Print summary for visibility in logs
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
