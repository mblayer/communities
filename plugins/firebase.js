import * as firebase from 'firebase/app'
import 'firebase/database'
import { configFirebase } from './configFirebase.js'

firebase.initializeApp(configFirebase)
const db = firebase.database()
export { db }
