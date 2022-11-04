import express from 'express';
import longestWord from './bootcamp/longestword.js';
import shortestWord from './bootcamp/shortestword.js';
import wordLengths from './bootcamp/wordLengths.js';
import cors from 'cors';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js'

// const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.get('/api/word_game', function (req, res) {

    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error: 'Please send in a sentence to analyze'
        })
    }
    res.json({
        'longestword': longestWord(sentence),
        'shortestword': shortestWord(sentence),
        'sum': wordLengths(sentence),
    });
});

app.get('/api/total_Phone_Bill', function (req, res) {

    const phoneBill = req.query.phoneBill;

    res.json({
        "Billing_amount": totalPhoneBill(tarrif),
    });
});

app.get('/api/enough_Airtime', function (req, res) {

    const phoneBill = req.query.phonebill;
    const airtimeAvailable = req.query.airtimeAvailable;

    res.json({
        "Bill_amount": phoneBill,
        "Air_amount": airtimeAvailable,
        "Air_remain": enoughAirtime(phoneBill, airtimeAvailable),
    });
});

const PORT = process.env.PORT || 6006;
app.listen(PORT, function () {
    console.log('api started on port', PORT)
})