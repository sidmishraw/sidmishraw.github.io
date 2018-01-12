import expr.core.Const;
import expr.core.Div;
import expr.core.Expression;
import expr.core.ExpressionVisitor;
import monad.Monad;

/**
 * Project: ExpressionsUsingMonads
 * Package:
 * File: DriverII.java
 * 
 * @author sidmishraw
 *         Last modified: Jan 11, 2018 4:26:17 PM
 */

/**
 * DriverII using Monads.
 * 
 * @author sidmishraw
 *
 *         Qualified Name: .DriverII
 *
 */
public class DriverII {
    
    /**
     * Evaluates the expression.
     * 
     * @param e
     *            The expression
     * @return The result of the expression.
     * @throws Exception
     */
    @SuppressWarnings("unchecked")
    static Monad<Integer> eval(Expression e) throws Exception {
        //
        // Pattern matching like in Scala but shadier :D
        //
        ExpressionVisitor matcher = new ExpressionVisitor() {
            Monad<Integer> v;
            
            @Override
            public void visit(Div div) {
                try {
                    this.v = DriverII.eval(div.getExp1()).shove(r1 -> {
                        try {
                            return DriverII.eval(div.getExp2()).shove(r2 -> Monad.wrap(r1 / r2));
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        return null;
                    });
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            
            @Override
            public void visit(Const constant) {
                this.v = Monad.wrap(constant.getVal());
            }
            
            @SuppressWarnings("unused")
            public Monad<Integer> getV() {
                return this.v;
            }
        };
        e.accept(matcher);
        
        //
        // Using a shady way to extract data from within anonymous object.
        //
        return (Monad<Integer>) matcher.getClass().getMethod("getV").invoke(matcher);
    }
    
    /**
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
    // O/p: result = Monad<Integer>(11)
    //
}
