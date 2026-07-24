import { describe, it, expect, beforeAll } from 'vitest';

describe('Project Integrity & DOM Environment', () => {
  beforeAll(() => {
    // Mock IntersectionObserver which is heavily used in our visualizers
    global.IntersectionObserver = class IntersectionObserver {
      constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
      disconnect() {}
      observe() {}
      unobserve() {}
      takeRecords() { return []; }
    } as any;
  });

  it('provides a functioning DOM environment', () => {
    const el = document.createElement('div');
    el.innerHTML = '<span class="test">Goal</span>';
    document.body.appendChild(el);

    const span = document.querySelector('.test');
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe('Goal');
  });

  it('can instantiate IntersectionObserver without crashing', () => {
    let fired = false;
    const observer = new IntersectionObserver(() => {
      fired = true;
    });
    
    expect(observer).toBeDefined();
    expect(typeof observer.observe).toBe('function');
  });
});
