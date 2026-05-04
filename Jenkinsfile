 pipeline {
      agent any

      triggers {
          pollSCM('H/1 * * * *')
      }

      environment {
          HTDOCS_PATH = "C:\\xampp\\htdocs\\Restaurant_Menu_Website"
      }

      stages {
          stage('Checkout') {
              steps { checkout scm }
          }

          stage('Lint HTML') {
              steps {
                  script {
                      def files = ['index.html', 'menu.html', 'about.html',
  'contact.html']
                      def missing = []
                      for (f in files) {
                          if (fileExists(f)) {
                              echo "Found: ${f}"
                          } else {
                              missing << f
                          }
                      }
                      if (missing) {
                          error "Missing: ${missing.join(', ')}"
                      }
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
                      def files = ['index.html', 'menu.html', 'about.html',
  'contact.html']
                      def missing = []
                      for (f in files) {
                          if (fileExists("${env.HTDOCS_PATH}\\${f}")) {
                              echo "Verified: ${f}"
                          } else {
                              missing << f
                          }
                      }
                      if (missing) {
                          error "Missing in htdocs: ${missing.join(', ')}"
                      }
                  }
              }
          }
      }

      post {
          success { echo "http://localhost/Restaurant_Menu_Website/" }
          failure { echo "Pipeline FAILED." }
      }
  }