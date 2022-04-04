---
sidebar_position: 390
---

# Supported units

Decipad supports the following units and compositions of them. Unless stated, units default to the international standard.

For example, when we say Inch we mean Inch (International), i.e. `0.0254 m`.

All definitions are exact.

Some conversions (e.g. bohr radius) are not exact by definition.

Please bear that in mind when using our units. Approximations are marked with a `*` for your convenience

## Unit prefixes

The standard [metric unit prefixes](https://en.wikipedia.org/wiki/Metric_prefix) are available in Decipad.

```deci live
1 metre in cm
==> 100 cm
```

## Length units

The default unit is Metre (`meter`, `m`).

The following are also supported:

- Mile (`mile`, `mi`) = `1609.344 m` = `1,760 yards`
- Yard (`yard`, `yd`) = `3 ft`
- Foot (`foot`, `ft`) = `12 inches`
- Inch (`inch`, `in`) = `0.0254 m`

```deci live
1 mile in inches
==> 63360 inches
```

Typography & Displays:

- Point (American, English) (`point`, `pt`) = `1/72.272 inches`
- Twip (`twip`) = `1/1440 inches`
- Pica (`pica`) = `12 points`

```deci live
1 point in twip
==> 19.9247 twips
```

Nautical:

- Nautical Mile (`nauticalmile`, `nmi`) = `1852 m`
- Nautical League (`nauticalleague`, `nl`) = `3 nmi`
- Fathom (`fathom`, `ftm`) = `6 ft`

```deci live
3 nmi in nl
==> 1 nautical league
```

Natural Sciences:

- Ångström (`angstrom`, `Å`) = `0.1 nm`
- Attometre (`attometre`, `am`) = `1×10e−18 m`
- Fermi (`fermi`, `fm`) = `0.000001 nm`
- Bohr(\*) (`bohr`, `a0`, `a₀`) = `5.29177210903e-11 m`

```deci live
1 angstrom in am
==> 100000000 am
```

Surveyor:

- Furlong (`furlong`, `fur`) = `220 yd`
- Chain (`chain`, `ch`) = `66 ft`
- Rod (`rod`, `rd`) = `0.25 chain`
- Link (`link`, `lnk`) = `7.92 inches`

```deci live
1 rod in link
==> 25 links
```

Astronomy:

- Astronomical unit (`austronomicalunit`, `au`) = `1.495978707×10e11 m`
- Light Year (`lightyear`, `ly`) = `9.4607304725808×10e15 m`
- Light Day (`lightday`, `ld`) = `24 lh`
- Light Hour (`lighthour`, `lh`) = `60 lm`
- Light Minutes (`lightminute`) = `60 ls`
- Light Second (`lightsecond`, `ls`) = `299792458 m`
- Parsec (`parsec`, `pc`) = `30856775814913700 m`

```deci live
1 ls in marathons
==> 7104.9(284986372792984950823557293518189358928783031164829956155942647233084488683493304893944780187225974641545206778054271833155587154876170162341509657542362839198957222419717976063514634435359639767744993482640123237350396966465220997748548406209266500770233439981040407631235928427538807915629813958999881502547695224552672117549472686337243749259390923095153454200734684204289607773432871193269344709088754591776276810048583955444957933404431804716198601730062803649721530987083777698779476241260812892522810759568669273610617371726507880080578267567247304182960066358573290674250503614172295295651143500414741083066714065647588576845597819646877592131769166962910297428605) marathons
```

Fun:

- Rope (`rope`) = `6.096 m`
- Hand (`hand`) = `4 inches`
- Smoot (`smoot`) = `1,702 m`
- Marathon (`marathon`) = `42195 m`
- League (`league`, `lea`) = `4828 m`

It takes over 26 horse races to make a marathon.

```deci live
(1 marathon in furlong) / 8
==> 26.2187(574564543068480076354092102123598186590312) furlongs
```

## Speed units

The default unit is Kilometer per hour (`kph`).

Kilometer per hour can be expressed as `kilometer/hour` and we support expanding (or contracting) any area unit to SI units, i.e. `meters/second`.

The following are also supported:

- Mile per hour (`mph`)
- Knot (`knot`) = `1 nmi/hour` = `1.852 kilometer/hour`

```deci live
3.6 kph in m/s
==> 1 m/s
```

## Area units

The default unit is Square Meter (`squaremeter`, `m2`, `m²`).

Square meter can be expressed as `m2` and we support expanding (or contracting) any area unit to si units.

The following are also supported:

- Square Kilometer (`squarekilometre`, `km2`, `km²`) = `10e6 m2`
- Square Mile (`squaremile`, `sqmi`) = `2,589,988.110336 m2` = `3,097,600 sqyd`
- Square Yard (`squareyard`, `sqyd`) = `9 sqft`
- Square Foot (`squarefoot`, `sqft`) = `144 sqin`
- Square Inch (`squareinch`, `sqin`) = `0.00064516 m2`

```deci live
(1 mi * 1mi in m^2) == (1 sqmi in m2)
==> true
```

Natural Sciences:

- Barn (`barn`, `b`) = `10e−28 m2`

Surveyor:

- Hectare (`hectare`, `ha`) = `10,000 m2`
- Are (`are`, `a`) = `100 m2`
- Acre (`acre`, `ac`) = `4840 sqyd`
- Barony (`barony`) = `4000 ac`

```deci live
1 ac in sqyd
==> 4840 yd²
```

## Volume units

The default unit is Square Meter (`cubicmeter`, `m3`, `m³`).

Gallon can be expressed as `m3` and we support expanding (or contracting) any volume unit to SI units.

The following are also supported:

- Liter (`liter`, `l`) = `0.001 m3`
- Cubic Mile (`cumi`) ≡ `4168181825.440579584 m3`
- Cubic Inch (`in3`, `in³`, `cuin`) = `16.387064×10e−6 m3`
- Cubic Yard (`yd3`, `yd³`,`cuyd`) = `27 ft3`
- Cubic Foot (`ft3`, `ft³`, `cuft`) = `1,728 sqin`
- Acre Foot (`acrefoot`, `acft`) = `1 ac x 1 ft`
- Ton (`ton_displacement`) = `0.99108963072 m3`
- Gallon (Imperial) (`gallon`, `gal`) = `4.54609 liters`
- Barrel (Imperial) (`barrel`, `bl`) = `36 gal`
- Bushel (Imperial) (`bushel`, `bu`) = `8 gallons`
- Bucket (Imperial) (`bucket`, `bkt`) = `4 gallons`
- Pint (Imperial) (`pint`) = `≡ 1/8 gal`
- Ounce (Imperial) (`floz`) = `28.4130625×10e−6 m3`

```deci live
1 barrel in gallon
==> 36 gallons
```

```deci live
(1 ac * 1 ft) in acft
==> 1000 acft
```

Cooking:

- Cup (Metric) (`cup`) = `250×10e−6 m3`
- Tea Spoon (Metric) (`teaspoon`, `tsp`) = `5×10e−6 m3`
- Table Spoon (Metric) (`tablespoon`, `tbsp`) = `3 tsp`
- Pinch (Metric) (`pinch`) = `1/16 tsp`
- Dash (Metric) (`dash`) = `1/2 pinch`

```deci live
20 tbsp in cups
==> 1.2 cups
```

## Pressure units

The default unit is Atmosphere (`atmosphere`, `atm`).

Pascal can be expressed as `kg⋅m−1⋅s−2` and we support expanding (or contracting) any pressure unit to SI units.

The following are also supported:

- Pascal (`pascal`, `pa`) = `1/101325 atm`
- Bar (`bar`, `ba`) = `105 Pa`
- Torr (`torr`, `mmHg`) = `1/760 atm`
- Pound per square inch(\*) (`psi`) =

## Energy units

The default unit is Joule (`Joule`, `J`).

Joule can be expressed as `kg⋅m2⋅s−2` and we support expanding (or contracting) any energy unit to SI units.

The following are also supported:

- Calorie (`calorie`, `cal`) = `4.1868 J`
- Watt hour (`Wh`) = `3600 J`

## Force units

The default unit is Newton (`newton`, `N`). Newton is expressed as `1 kg⋅m⋅s−2` and we support expanding (or contracting) any force unit to SI units.

## Mass units

The default unit is Gram (`g`, `gr`).

The following are also supported:

- Tonne (`tonne`) = `1000 kg`
- Ton (`ton`) = `2240 lbav`
- Pound (Imperial) (`lbav`) = `0.45359237 kg`
- Ounce (Imperial) (`ozav`) = `1⁄16 lbav`
- Ounce (US food nutrition labelling) (`oz`) = `28 g`

## Temperature units

The default unit is Kelvin (`kelvin`, `K`).

The following are also supported:

- Celsius (`celsius`, `°c`) = `[K] ≡ [°C] + 273.15`
- Fahrenheit (`fahrenheit`, `°f`) = `[K] ≡ ([°F] + 459.67) × 5⁄9`

## Time units

The default unit is Second (`second`, `sec`, `s`).

The following are also supported:

- Year (`year`, `y`) = `12 months`
- Month (`month`, `m`) = `1/12 year`
- Week (`day`, `day`) = `7 days`
- Day (`day`, `day`) = `24 h`
- Hour (`hour`, `h`) = `60 m`
- Minutes (`minute`, `m`) = `60 s`

## Frequency units

The default unit is Newton (`hertz`, `Hz`).

Hertz can be expressed as `s−1` and we support expanding (or contracting) any frequency unit to SI units.

## Information units

The default unit is Bit (`bit`).

Byte (`byte`) is also available and defined as `8 bits`.

Currently we don't support [binary unit prefixes](https://en.wikipedia.org/wiki/Binary_prefix).

## Power units

The default unit is Watt (`watt`, `W`).

Watt can be expressed as `kg⋅m2⋅s−3` and we support expanding (or contracting) any power unit to SI units.

## Substance units

The default unit is Mole (`mole`, `mol`).

## Electric current units

The default unit is Watt (`ampere`, `A`).

Watt can be expressed as `kg⋅m2⋅s−3⋅A−2` and we support expanding (or contracting) any electrical current unit to SI units.

## Electric charge units

The default unit is Coulomb (`coulomb`, `C`).

Coulomb can be expressed as `s⋅A` and we support expanding (or contracting) any electric charge unit to SI units.

## Electrical capacitance

The default unit is Farad (`farad`, `F`).

Farad can be expressed as `kg−1⋅m−2⋅s4⋅A2` and we support expanding (or contracting) any electrical capacitance unit to SI units.

## Electrical resistance

The default unit is Omh (`omh`, `Ω`).

Ohm can be expressed as `kg⋅m2⋅s−3⋅A−2` and we support expanding (or contracting) any electrical resistance unit to SI units.

## Electrical conductance

The default unit is Siemens (`siemens`).

Siemens can be expressed as `kg−1⋅m−2⋅s3⋅A2` and we support expanding (or contracting) any electrical conductance unit to SI units.

## Voltage

The default unit is Volt (`volt`, `V`).

Volt can be expressed as `kg⋅m2⋅s−3⋅A−1` and we support expanding (or contracting) any voltage unit to SI units.

## Luminous Intensity

The default unit is Candela (`candela`, `cd`).

## Luminous Flow

The default unit is Lumen (`lumen`, `lm`).

Lumen can be expressed as `cd⋅sr` and we support expanding (or contracting) any luminous flow unit to SI units.

## Solid Angle

The default unit is Lumen (`steraradian`, `sr`).

## Currency

Currencies can be expressed as their symbol or by their name.

### List of supported currencies

| Currency                | Name | Symbol |
| ----------------------- | ---- | ------ |
| 🇺🇸 United States dollar | USD  | $      |
| 🇪🇺 Euro                 | EUR  | €      |
| 🇯🇵 Japanese yen         | JPY  | ¥      |
| 🇬🇧 Pound sterling       | GBP  | £      |
| 🇦🇺 Australian dollar    | AUD  | A$     |
| 🇨🇦 Canadian dollar      | CAD  | C$     |
| 🇨🇭 Swiss franc          | CHF  | CHF    |
| 🇨🇳 Renminbi             | CNY  | ¥      |
| 🇭🇰 Hong Kong dollar     | HKD  | HK$    |
| 🇳🇿 New Zealand dollar   | NZD  | NZ$    |
| 🇸🇪 Swedish krona        | SEK  | kr     |
| 🇰🇷 South Korean won     | KRW  | ₩      |
| 🇸🇬 Singapore dollar     | SGD  | S$     |
| 🇳🇴 Norwegian krone      | NOK  | kr     |
| 🇲🇽 Mexican peso         | MXN  | $      |
| 🇮🇳 Indian rupee         | INR  | ₹      |
| 🇷🇺 Russian ruble        | RUB  | ₽      |
| 🇿🇦 South African rand   | ZAR  | R      |
| 🇹🇷 Turkish lira         | TRY  | ₺      |
| 🇧🇷 Brazilian real       | BRL  | R$     |
| 🇹🇼 New Taiwan dollar    | TWD  | NT$    |
| 🇩🇰 Danish krone         | DKK  | kr     |
| 🇵🇱 Polish złoty         | PLN  | zł     |
| 🇹🇭 Thai baht            | THB  | ฿      |
| 🇮🇩 Indonesian rupiah    | IDR  | Rp     |
| 🇭🇺 Hungarian forint     | HUF  | Ft     |
| 🇨🇿 Czech koruna         | CZK  | Kč     |
| 🇮🇱 Israeli new shekel   | ILS  | ₪      |
| 🇨🇱 Chilean peso         | CLP  | CLP$   |
| 🇵🇭 Philippine peso      | PHP  | ₱      |
| 🇦🇪 UAE dirham           | AED  | د.إ    |
| 🇨🇴 Colombian peso       | COP  | COL$   |
| 🇸🇦 Saudi riyal          | SAR  | ﷼      |
| 🇲🇾 Malaysian ringgit    | MYR  | RM     |
| 🇷🇴 Romanian leu         | RON  | L      |
