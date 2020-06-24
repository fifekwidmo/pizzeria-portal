# Dashboard

- main page'/'
 - statystyki dzisiejszych zamówień (lokalne i zdalne),
 - lista rezerwacji i eventów zaplanowanych na dzisiaj,

# login site

- '/login'
 - pola na login i hasło,
 - button do logowania (link do dashboardu),

# view avi of tables

- '/tables'
 - wybór daty i godziny,
 - tabela z listą rezerwacji oraz wydarzeń
  - każda kolumna - 1 stolik,
  - każdy wiersz = 30minut,
  - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki,
  - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów,

- '/tables/booking/:id'
 - zawiera wszystkie informacje dotyczące rezerwacji,
 - umożliwia edycję i zapisanie zmian

- '/tables/booking/new'
 - analogicznie do powyższej, bez początkowych informacji,

- '/tables/booking/events:id'
 - analogicznie do powyższej, dla eventów

- '/tables/booking/events/new'
 - analogicznie do powyższej, dla eventów, bez początkowych informacji,

# view waitress

- '/waiter'
 - tabela
  - w wierszach będzie wyświetlać stoliki, 
  - w kolumnach będzie wyświetlać różnego rodzaju informacje np. status, czas od ostatniej aktywności,
  - w ostatniej kolumnie dostępne akcje dla danego stolika,

- '/waiter/order/new'
 - numer stolika (edytowalny),
 - menu produktów dostępnych w restauracji,
 - opcje wybranego produktu,
 - zamówienie (zamówione produkty z opcjami i ceną),
 - kwota zamówienia

- '/waiter/order/:id'
 - jak powyższa

# view kitchen

- '/kitchen'
 - wyświetlanie listy zamówień w kolejności ich złożenia,
 -  lista musi zawierać:
  - numer stolika lub zamówienia zdalnego,
  - pełne informacje dt zamówionych dań,
 - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane,
