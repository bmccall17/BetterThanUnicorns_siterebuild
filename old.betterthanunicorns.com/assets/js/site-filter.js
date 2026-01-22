/**
 * Simple vanilla JS filter for resources page
 * Replaces JetBoost functionality with offline-capable filtering
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const searchInput = document.querySelector('.jetboost-list-search-input-4zj6');
    const resetButton = document.querySelector('.jetboost-filter-none-65b6');
    const filterTags = document.querySelectorAll('.tags.jetboost-filter-active');
    const listItems = document.querySelectorAll('.collection-item.dyn-link.resources');
    const emptyState = document.querySelector('.jetboost-list-wrapper-empty-4zj6');

    // Exit if we're not on a page with filter elements
    if (!listItems.length) return;

    let activeFilters = new Set();
    let searchTerm = '';

    /**
     * Filter items based on search term and active tag filters
     */
    function filterItems() {
      let visibleCount = 0;

      listItems.forEach(function(item) {
        const title = item.querySelector('.heading-12');
        const description = item.querySelector('.text-block-3');
        const hiddenInput = item.querySelector('.jetboost-list-item');

        const titleText = title ? title.textContent.toLowerCase() : '';
        const descText = description ? description.textContent.toLowerCase() : '';
        const itemSlug = hiddenInput ? hiddenInput.value.toLowerCase() : '';

        // Check search match
        const searchMatch = !searchTerm ||
          titleText.includes(searchTerm) ||
          descText.includes(searchTerm);

        // Check tag filter match (if no filters active, all match)
        const tagMatch = activeFilters.size === 0 ||
          activeFilters.has(itemSlug);

        // Show/hide item
        if (searchMatch && tagMatch) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      // Show/hide empty state
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    /**
     * Handle search input
     */
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        searchTerm = e.target.value.toLowerCase().trim();
        filterItems();
      });

      // Prevent form submission
      const form = searchInput.closest('form');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
        });
      }
    }

    /**
     * Handle tag filter clicks
     */
    filterTags.forEach(function(tag) {
      tag.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the associated hidden input value for this tag
        const parent = tag.closest('.w-dyn-item');
        const hiddenInput = parent ? parent.querySelector('.jetboost-list-item') : null;
        const filterValue = hiddenInput ? hiddenInput.value.toLowerCase() : '';

        if (!filterValue) return;

        // Toggle filter
        if (activeFilters.has(filterValue)) {
          activeFilters.delete(filterValue);
          tag.classList.remove('active');
        } else {
          activeFilters.add(filterValue);
          tag.classList.add('active');
        }

        filterItems();
      });
    });

    /**
     * Handle reset button
     */
    if (resetButton) {
      resetButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Clear all filters
        activeFilters.clear();
        searchTerm = '';

        // Reset UI
        if (searchInput) {
          searchInput.value = '';
        }

        filterTags.forEach(function(tag) {
          tag.classList.remove('active');
        });

        filterItems();
      });
    }

    // Initial filter (show all)
    filterItems();
  });
})();
