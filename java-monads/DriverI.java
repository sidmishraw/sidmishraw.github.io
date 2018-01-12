import expr.core.Const;
import expr.core.Div;
import expr.core.Expression;
import expr.core.ExpressionVisitor;

/**
 * Project: ExpressionsUsingMonads
 * Package:
 * File: DriverI.java
 * 
 * @author sidmishraw
 *         Last modified: Jan 11, 2018 4:07:25 PM
 */

/**
 * Without monads.
 * 
 * @author sidmishraw
 *
 *         Qualified Name: .DriverI
 *
 */
public class DriverI {
    
    /**
     * Evaluates the expression.
     * 
     * @param e
     *            The expression
     * @return The result of the expression.
     * @throws Exception
     */
    static int eval(Expression e) throws Exception {
        ExpressionVisitor matcher = new ExpressionVisitor() {
            int v;
            
            @Override
            public void visit(Div div) {
                try {
                    this.v = DriverI.eval(div.getExp1()) / DriverI.eval(div.getExp2());
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            
            @Override
            public void visit(Const constant) {
                this.v = constant.getVal();
            }
            
            @SuppressWarnings("unused")
            public int getV() {
                return this.v;
            }
        };
        e.accept(matcher);
        
        //
        // Using a shady way to extract data from within anonymous object.
        //
        return (int) matcher.getClass().getMethod("getV").invoke(matcher);
    }
    
    /**
     * Simple driver code.
     * 
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        Expression e1 = new Const(27);
        Expression e2 = new Const(3);
        Expression e3 = new Div(e1, e2);
        Expression e4 = new Div(new Const(99), e3);
        System.out.println("result = " + eval(e4));
    }
    
    //
    // O/P: result = 11
    //
}
