class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#search-input').value;
  }

  render() {
    this.innerHTML = `
            <div class="container">
                <div class="row justify-content-md-center mt-3 text-center">
                    <div class="col-lg-8 col meal-search">
                        <h2 class="title fw-bold">Mau <span class="navbar-brand" style="color: var(--red-dark);">makanapa</span>hari ini?</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="meal-search-box d-flex justify-content-center align-items-stretch">
                        <input type="text" class="search-control form-control px-4" placeholder="Input an ingredient..." id="search-input">
                        <button type="submit" class="search-btn" id="search-btn">
                            <i class="fas fa-search" style="color: white;"></i>
                        </button>
                    </div>
                    <blockquote class="text-center mt-3">
                        There are three ingredients in the good life: learning, earning and yearning.<br />
                        <cite>- Christopher Morley</cite>
                    </blockquote>
                </div>
            </div>
        `;

    this.querySelector('#search-btn').addEventListener(
        'click',
        this._clickEvent,
    );
  }
}

customElements.define('search-bar', SearchBar);
