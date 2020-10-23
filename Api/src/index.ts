import app from './app'
import './connect'

app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'))
})