import showScreen from '../../../templates/show-screen.js';
import initReplay from '../../replay.js';
import FailResultView from './fail-result-view.js';

class ResultFail {
  constructor(state) {
    this.state = state;
    this.view = new FailResultView(this.state);
  }

  init() {
    showScreen(this.view.element);
    initReplay(this.view.getReplay());
  }
}

export default ResultFail;
