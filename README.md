# BattleShips

Upravte Vaší aplikaci, aby logická část do prezentační vracela hrací pole takto:
- jedno políčko budete reprezentovat interfacem
- tento interface bude bez informací "vnitřího stavu" - (
bude mít

property nebo metodu) pouze s enumy - finální informací, dle které prezntační vrstva renderuje.

Jiný typ už nebude prezentační vrstva jako reprezentaci políčka znát. (např. při střílení budete z prezentační vrstvy posílat instanci tohoto interfacu a nebudete znát jeho implementaci).
EDIT: V prezentaci nepoužívejte čísla pro porovnání enumů.

HINT: Dále si musíte vytvořit třídu "pro" tu logickou část - tato třída bude tento interface implementovat, v této třídě můžete mít uložen reálný stav políčka. Při střílení jak potřeba říci, že opravdu pracujeme s instancí naší třídy a instanci interfacu "castnout" na instanci třídy. (viz link)
Hrací pole s interfacy vracejte v nějaké metodě (např. getGrid, getBattlefield) - pokud už máte pole instancí tříd implementující Váš interface, můžete ho rovnou vrátit, v return typu však místo Vaší třídy použijte interface (Pokud máte interface A a třídu B, která A implementuje, a váš stav máte jako B[][], jako return type použijte A[][] a můžete vaše pole rovnou vrátit. V Javě je potřeba použít kolekci a jako return type např. List<? extends List<? extends A>> :--))

Jako poslední byste měli "schovat" všechny ostatní fieldy/metody logické vrstvy, které prezentační nevyužívá - dejte je private (viz link, ignorujte protected).

BONUS: Udělejte si interface pro logickou část, v něm budou pouze hlavičky metod (název, argumenty, return type, žádné tělo), se kterými pracuje prezentační vrstva, implementace těchto metod a pomocné metody budou v implementaci tohoto interfacu - např. Vaší stávající třídě.
Ve třídě také bude stav, tedy "proměnná" s hracím polem.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
