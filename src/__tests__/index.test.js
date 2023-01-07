
import { expect } from '@jest/globals';
import { reverseString }  from '../scripts/11.6.3.js' //homework 11.6.3
import { getMonth } from '../scripts/getMonth.js' // homework 11.7.2

//11.6.3
const string = 'hello';
const reverseStringText = 'olleh'

describe('test reverce', () => {
    it(`test reverse ${string}`, () => {
        expect(reverseString(string)).toBe(reverseStringText);
    })
    
});

//11.7.2

//успешный тест
test ('test - check right month number', () => {
    const num = 1;
    const monthText = `январь`;
    expect(getMonth(num)).toBe(monthText);
});

//неуспешный тест
test ('test - check wrong month number', () => {
    const num = 6;
    const monthText = `декабрь`;
    expect(getMonth(num)).toBe(monthText);
});


describe('check month number', () => {
    
    //успешные юнит-кейсы
    it(`check number 1 with month`, () => {
        expect(getMonth(1)).toBe('январь');
    }),
    it(`check number 3 with month`, () => {
        expect(getMonth(3)).toBe('март');
    }),
    //корнер-кейс
    it(`check wrong number with month`, () => {
        expect(getMonth(13)).toBe('неизвестно');
    })
});

