import { parentPort } from 'worker_threads'

export const bigData = function(req, res) {
    const worker = new Worker('.')
}

export const getMessage = function(req, res) {
    res.send('This is message endpoint of server')
}