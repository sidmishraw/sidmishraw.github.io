/**
 * Project: ExpressionsUsingMonads
 * Package: monad
 * File: Monad.java
 * 
 * @author sidmishraw
 *         Last modified: Jan 11, 2018 4:19:32 PM
 */
package monad;

import java.util.function.Function;

/**
 * Monad of type A.
 * 
 * @author sidmishraw
 *
 *         Qualified Name: monad.Monad
 *
 * @param <A>
 *            The type of data contained inside the {@code Monad}.
 */
public class Monad<A> {
    
    /**
     * The contents of the {@link Monad}.
     */
    private A a;
    
    /**
     * Creates a Monad.
     * 
     * @param a
     *            The contents to be wrapped into a {@link Monad}.
     */
    public Monad(A a) {
        this.a = a;
    }
    
    /**
     * Shoves the contents of this monad into the transformer {@code f} to produce another {@link Monad}.
     * 
     * @param f
     *            The transformer.
     * @return The transformed {@link Monad}.
     */
    public <B> Monad<B> shove(Function<A, Monad<B>> f) {
        return f.apply(this.a);
    }
    
    /**
     * Extracts the contents of the {@link Monad}.
     * 
     * @return The contents of the {@link Monad}.
     */
    public A unwrap() {
        return this.a;
    }
    
    /**
     * Wraps the content into a {@link Monad}.
     * 
     * @param a
     *            The content to be wrapped into a {@link Monad}.
     * @param <A>
     *            The type of contents of the {@link Monad}.
     * @return The {@link Monad}.
     */
    public static <A> Monad<A> wrap(A a) {
        return new Monad<>(a);
    }
    
    @Override
    public String toString() {
        return "Monad<" + this.a.getClass().getSimpleName() + ">(" + this.a + ")";
    }
}
