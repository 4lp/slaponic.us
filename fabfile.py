from fabric.api import local

def webpack():
    # local('del /f "./personal_page/static/bundles/prod/*.js"')
    local('.\\node_modules\\.bin\\webpack --config webpack.prod.config.js --progress --colors')