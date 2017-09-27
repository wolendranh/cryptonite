import { Action, Dispatch } from 'redux';

interface Currency
{
    name: string,
    value: number
}

export function addTodo(currency:Currency[]) {
  return { type: 'press button', 'payload': currency };
}
