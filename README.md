# Date-holidays-be

> Provides the official Belgian holidays

The intent of this package is to provide a lightweight way to get the official Belgian holidays.

You can decide between fetching the full list of holidays with their names in Dutch, French & German, or checking for a specific date.

` new BelgianHolidays().isHoliday(new Date(2023, 0, 1))` will result in `true`

 
` new BelgianHolidays().getHolidays(2023)`

Will result in:

```
[
    {date:new Date(2023, 0, 1), labels: {nl: 'Nieuwjaar', fr: 'Nouvel An', de: 'Neujahr', en: 'New Year\'s Day'}},
    {date:new Date(2023, 3, 10), labels: {nl:'Tweede paasdag', fr: 'Lundi de Pâques', de: 'Ostermontag', en: 'Easter Monday'}},
    {date:new Date(2023, 4, 1), labels: {nl:'Dag van de Arbeid', fr: 'Fête du travail', de: 'Tag der Arbeit', en: 'Labour day'}},
    {date:new Date(2023, 4, 18), labels: {nl:'O.L.H. Hemelvaart', fr: 'Ascension', de: 'Christi Himmelfahrt', en: 'Ascension Day'}},
    {date:new Date(2023, 4, 29), labels: {nl:'Tweede pinksterdag', fr: 'Lundi de Pentecôte', de: 'Pfingstmontag', en: 'Whit Monday'}},
    {date:new Date(2023, 6, 21), labels: {nl: 'Nationale feestdag', fr: 'Fête nationale', de: 'Nationalfeiertag', en: 'National Holiday'}},
    {date:new Date(2023, 7, 15), labels: {nl:'O.L.V. Hemelvaart', fr: 'Assomption', de: 'Mariä Himmelfahrt', en: 'Assumption'}},
    {date:new Date(2023, 10, 1), labels: {nl:'Allerheiligen', fr: 'Toussaint', de: 'Allerheiligen', en: 'All Saints\' Day'}},
    {date:new Date(2023, 10, 11), labels: {nl:'Wapenstilstand', fr:  'Armistice', de: 'Waffenstillstand', en: 'Armistice'}},
    {date:new Date(2023, 11, 25), labels: {nl:'Kerstmis', fr: 'Noël', de: 'Weihnachten', en: 'Christmas Day'}}
]
```
