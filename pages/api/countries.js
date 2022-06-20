import countries from '../../components/data'


export default function handler(req, res) {
    res.status(200).json(countries);
}