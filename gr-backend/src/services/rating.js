const MILISECONDS_INTERVAL = 300;

class Rating {

  static computeVote(vote) {
    const [chosenId, otherId, timestamp] = vote.split('::');
    const now = Date.now();
    if (timestamp - now < MILISECONDS_INTERVAL) {
      // invalid vote
      return;
    }
    // other validations

    // compute vote, calculate ratings

  }
}

module.exports = Rating;