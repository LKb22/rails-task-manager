// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

const list = document.getElementById('task-list');
const listItems = list.querySelectorAll('li');

listItems.forEach(item => {
  // Create checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create label element (optional)
  const label = document.createElement('label');
  label.textContent = item.textContent;
  label.appendChild(checkbox); // Add checkbox to label

  // Style for stricter checkbox positioning (add this part)
  label.style.display = 'flex';
  label.style.alignItems = 'center';
  checkbox.style.marginRight = '10px'; // Add margin for spacing
  label.style.width = '100%'; // Set label width to fill remaining space

  // Replace list item with label (or checkbox directly if no label)
  item.parentNode.replaceChild(label, item);
});
