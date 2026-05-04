 pipeline {
      agent any

      triggers {
          pollSCM('H/1 * * * *')
      }

      environment {
          HTDOCS_PATH = "C:\\xampp\\htdocs\\Restaurant_Menu_Website"
          FILES = "index.html,menu.html,about.html,contact.html"
      }

      stages {
          stage('Checkout') {
              steps { checkout scm }
          }

          stage('Lint HTML') {
              steps {
                  script {
                      def files = env.FILES.split(',')
                      def missing = files.findAll { !fileExists(it.trim()) }
                      if (missing) {
                          error "Missing: ${missing.join(', ')}"
                      }
                      files.each { echo "Found: ${it}" }
                  }
              }
          }

          stage('Deploy to XAMPP') {
              steps {
                  bat 'if not exist "%HTDOCS_PATH%" mkdir "%HTDOCS_PATH%"'
                  bat 'xcopy /E /Y /I . "%HTDOCS_PATH%"'
              }
          }

          stage('Verify Deployment') {
              steps {
                  script {
                      def files = env.FILES.split(',')
                      def missing = files.findAll {
  !fileExists("${env.HTDOCS_PATH}\\${it.trim()}") }
                      if (missing) {
                          error "Missing in htdocs: ${missing.join(', ')}"
                      }
                      files.each { echo "Verified: ${it}" }
                  }
              }
          }
      }

      post {
          success { echo "http://localhost/Restaurant_Menu_Website/" }
          failure { echo "Pipeline FAILED." }
      }
  }