class Minima {
  CostoExtra(base, duracion) {
    return 0;
  }
}

class Media {
  CostoExtra(base, duracion) {
    return base * 0.05;
  }
}

class Maxima {
  CostoExtra(base, duracion) {
    if (duracion <= 10) {
      return base * 0.07;
    } else {
      const exceso = duracion - 10;
      return base * 0.07 + exceso * 1000;
    }
  }
}

module.exports = { Minima, Media, Maxima }