// Shared helpers
export function initials(name=''){
  return name.split(' ').map(p=>p[0]).slice(0,2).join('').toUpperCase() || 'A';
}
export function $(sel, root=document){ return root.querySelector(sel); }
export function $all(sel, root=document){ return [...root.querySelectorAll(sel)]; }
export function toast(msg){ alert(msg); } // simple
