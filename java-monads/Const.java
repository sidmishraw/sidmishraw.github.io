/**
 * Project: ExpressionsUsingMonads
 * Package: expr.core
 * File: Const.java
 * 
 * @author sidmishraw
 *         Last modified: Jan 11, 2018 4:00:13 PM
 */
package expr.core;

import lombok.Getter;

/**
 * A constant.
 * 
 * @author sidmishraw
 *
 *         Qualified Name: expr.core.Const
 *
 */
public class Const extends Expression {
    
    private @Getter int val;
    
    /**
     * @param val
     *            The constant value.
     */
    public Const(int val) {
        this.val = val;
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
