/* eslint-disable no-console */
import * as colors from 'colors';


export function l(...message: any[]) {
    console.log(new Date(), colors.green('/I/'), ...message);
}

export function w(...message: any[]) {
    console.warn(new Date(), colors.yellow('/W/'), ...message);
}

export function e(...message: any[]) {
    console.error(new Date(), colors.red('/E/'), ...message);
}