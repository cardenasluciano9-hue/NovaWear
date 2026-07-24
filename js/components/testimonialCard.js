export function createTestimonialCard(testimonial){

    return `

        <div class="col-lg-4 col-md-6">

            <div class="testimonial-card">

                <div class="testimonial-stars">

                    ${'<i class="bi bi-star-fill"></i>'.repeat(testimonial.rating)}

                </div>

                <div class="testimonial-quote">

                    <i class="bi bi-quote"></i>

                </div>

                <p class="testimonial-comment">

                    "${testimonial.comment}"

                </p>

                <div class="testimonial-user">

                    <img
                        src="${testimonial.avatar}"
                        alt="${testimonial.name}"
                        class="testimonial-avatar"
                    >

                    <div>

                        <h5>

                            ${testimonial.name}

                        </h5>

                        <span>

                            <i class="bi bi-patch-check-fill"></i>

                            ${testimonial.role}

                        </span>

                    </div>

                </div>

            </div>

        </div>

    `;

}