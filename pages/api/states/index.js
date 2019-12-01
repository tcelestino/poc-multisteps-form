import { States as states } from '../../../data';

export default (req, res) => {
  res.status(200).json(states);
}
