import {isHoliday, getHolidays} from '../src/belgianHolidays';

describe('Testing the full Belgian holiday dataset', () => {
    test('2023', () => {
        expect(getHolidays(2023)).toEqual([
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
        ]);
    });

    test('2020', () => {
        expect(getHolidays(2020)).toEqual([
            {date:new Date(2020, 0, 1), labels: expect.objectContaining({en: 'New Year\'s Day'})},
            {date:new Date(2020, 3, 13), labels: expect.objectContaining({en: 'Easter Monday'})},
            {date:new Date(2020, 4, 1), labels: expect.objectContaining({en: 'Labour day'})},
            {date:new Date(2020, 4, 21), labels: expect.objectContaining({en: 'Ascension Day'})},
            {date:new Date(2020, 5, 1), labels: expect.objectContaining({en: 'Whit Monday'})},
            {date:new Date(2020, 6, 21), labels: expect.objectContaining({en: 'National Holiday'})},
            {date:new Date(2020, 7, 15), labels: expect.objectContaining({en: 'Assumption'})},
            {date:new Date(2020, 10, 1), labels: expect.objectContaining({en: 'All Saints\' Day'})},
            {date:new Date(2020, 10, 11), labels: expect.objectContaining({en: 'Armistice'})},
            {date:new Date(2020, 11, 25), labels: expect.objectContaining({en: 'Christmas Day'})},
        ]);
    });

    test('2019', () => {
        expect(getHolidays(2019)).toEqual([
            {date: new Date(2019, 0, 1), labels: expect.objectContaining({en: 'New Year\'s Day'})},
            {date: new Date(2019, 3, 22), labels: expect.objectContaining({en: 'Easter Monday'})},
            {date: new Date(2019, 4, 1), labels: expect.objectContaining({en: 'Labour day'})},
            {date: new Date(2019, 4, 30), labels: expect.objectContaining({en: 'Ascension Day'})},
            {date: new Date(2019, 5, 10), labels: expect.objectContaining({en: 'Whit Monday'})},
            {date: new Date(2019, 6, 21), labels: expect.objectContaining({en: 'National Holiday'})},
            {date: new Date(2019, 7, 15), labels: expect.objectContaining({en: 'Assumption'})},
            {date: new Date(2019, 10, 1), labels: expect.objectContaining({en: 'All Saints\' Day'})},
            {date: new Date(2019, 10, 11), labels: expect.objectContaining({en: 'Armistice'})},
            {date: new Date(2019, 11, 25), labels: expect.objectContaining({en: 'Christmas Day'})},
        ]);
    });
});

describe('Easter Monday', () => {
    test('2022', () => {
        expect(isHoliday(new Date(2022, 3, 18, 12, 10, 1))).toBe(true);
    });

    test('2020', () => {
        expect(isHoliday(new Date(2020, 3, 13))).toBe(true);
    });

    test('2018', () => {
        expect(isHoliday(new Date(2018, 3, 2))).toBe(true);
    });
});

describe('Ascension day', () => {
    test('2022', () => {
        expect(isHoliday(new Date(2022, 4, 26))).toBe(true);
    });

    test('2020', () => {
        expect(isHoliday(new Date(2020, 4, 21, 14, 2, 1))).toBe(true);
    });

    test('2018', () => {
        expect(isHoliday(new Date(2018, 4, 10))).toBe(true);
    });
});

describe('Whit Monday', () => {
    test('2022', () => {
        expect(isHoliday(new Date(2022, 5, 6))).toBe(true);
    });

    test('2020', () => {
        expect(isHoliday(new Date(2020, 5, 1))).toBe(true);
    });

    test('2018', () => {
        expect(isHoliday(new Date(2018, 4, 21, 12, 5, 1))).toBe(true);
    });
});

describe('edge cases', () => {
    test('returns false when it is not a holiday', () => {
        expect(isHoliday(new Date(2022, 0, 2))).toBeFalsy();
        expect(isHoliday(new Date(2022, 2, 6))).toBeFalsy();
    });

    test('returns false if no date was provided', () => {
        const noDate = undefined as unknown as Date;
        expect(isHoliday(noDate)).toBe(false);
    })
});
