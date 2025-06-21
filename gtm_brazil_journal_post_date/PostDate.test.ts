import { expect, jest } from '@jest/globals';
import sinon from 'sinon';
import parseDate from './PostDate';

const sandbox = sinon.createSandbox();

describe('test new dates', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    sandbox.restore();
  });

  it('should call querySelector 1 time', () => {
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    parseDate();
    expect(querySelectorSpy).toBeCalledTimes(1);
  });

  it('should return null for invalid new date', () => {
    const element = document.createElement('time');
    element.innerText = 'foo de bar de baz';
    sandbox.stub(document, 'querySelector').withArgs('time.post-time').returns(element);
    expect(parseDate()).toBe(null);
  });

  it('should return true for valid dates', () => {
    const element = document.createElement('time');
    element.innerText = '10 de novembro de 2021';
    sandbox.stub(document, 'querySelector').withArgs('time.post-time').returns(element);
    expect(parseDate()).toBe(true);
  });
});

describe('test old dates', () => {
});
