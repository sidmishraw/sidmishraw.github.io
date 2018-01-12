/**
 * Project: ExpressionsUsingMonads
 * Package: expr.core
 * File: Div.java
 * 
 * @author sidmishraw
 *         Last modified: Jan 11, 2018 4:02:53 PM
 */
package expr.core;

import lombok.Getter;

/**
 * A division operation.
 * 
 * @author sidmishraw
 *
 *         Qualified Name: expr.core.Div
 *
 */
public class Div extends Expression {
    
    private @Getter Expression exp1;
    private @Getter Expression exp2;
    
    /**
     * @param exp1
     *            Left operand
     * @param exp2
     *            Right operand
     */
    public Div(Expression exp1, Expression exp2) {
        this.exp1 = exp1;
        this.exp2 = exp2;
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see expr.core.Expression#accept(expr.core.ExpressionVisitor)
     */
    @Override
    public void accept(ExpressionVisitor visitor) {
        visitor.visit(this);
    }
    
}
