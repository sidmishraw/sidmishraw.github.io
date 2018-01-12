/**
 * Project: ExpressionsUsingMonads
 * Package: expr.core
 * File: ExpressionVisitor.java
 * 
 * @author sidmishraw
 *         Last modified: Jan 11, 2018 4:01:08 PM
 */
package expr.core;

/**
 * @author sidmishraw
 *
 *         Qualified Name: expr.core.ExpressionVisitor
 *
 */
public interface ExpressionVisitor {
    void visit(Const constant);
    void visit(Div div);
}
