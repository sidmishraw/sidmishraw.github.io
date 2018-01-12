/**
 * Project: ExpressionsUsingMonads
 * Package: expr.core
 * File: Expression.java
 * 
 * @author sidmishraw
 *         Last modified: Jan 11, 2018 3:59:34 PM
 */
package expr.core;

/**
 * An expression.
 * 
 * @author sidmishraw
 *
 *         Qualified Name: expr.core.Expression
 *
 */
public abstract class Expression {
    /**
     * Visitor for pattern matching
     * 
     * @param visitor
     *            The visitor for pattern matching.
     */
    public abstract void accept(ExpressionVisitor visitor);
}
