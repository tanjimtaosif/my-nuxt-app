<script setup>
import { Star } from 'lucide-vue-next';

const reviews = [
  { stars: 5, author: 'Sarah K.', text: 'Great product! Exactly what I was looking for. The quality exceeded my expectations.' },
  { stars: 4, author: 'Mike T.', text: 'Solid quality and fast shipping. Would recommend to others.' },
  { stars: 5, author: 'Emily R.', text: 'This is my second purchase. Consistent quality every time!' },
];
</script>

<template>
  <div class="review_section">
    <h3 class="review_section__title">Customer Reviews</h3>
    <div class="review_section__list">
      <div v-for="(review, i) in reviews" :key="i" class="review_card">
        <div class="review_card__header">
          <div class="review_card__stars">
            <Star
              v-for="s in 5"
              :key="s"
              :size="14"
              :class="['review_card__star', { 'review_card__star--filled': s <= review.stars }]"
            />
          </div>
          <span class="review_card__author">{{ review.author }}</span>
        </div>
        <p class="review_card__text">{{ review.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review_section {
  &__title {
    font-size: var(--font_size_xl);
    font-weight: var(--font_weight_semibold);
    margin-bottom: var(--space_lg);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--space_md);
  }
}

.review_card {
  background-color: var(--color_bg_card);
  border: 1px solid var(--color_border);
  border-radius: var(--border_radius_md);
  padding: var(--space_lg);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space_sm);
  }

  &__stars {
    display: flex;
    gap: var(--space_xs);
  }

  &__star {
    color: var(--color_border);

    &--filled {
      color: var(--color_warning);
      fill: var(--color_warning);
    }
  }

  &__author {
    font-size: var(--font_size_sm);
    font-weight: var(--font_weight_semibold);
    color: var(--color_text_light);
  }

  &__text {
    font-size: var(--font_size_sm);
    color: var(--color_text);
    line-height: 1.6;
  }
}
</style>
