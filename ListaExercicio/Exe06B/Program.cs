namespace Exe06B;
class Program
{
    static void Main(string[] args)
    {
        int[] vetor = new int[100];
        Random aleatorio = new Random();
        for (int i = 0; i < vetor.Length; i++)
        {
            vetor[i] = aleatorio.Next(100);
        }

        //Imprimir vetor antes da ordenação
        for (int i = 0; i < vetor.Length; i++)
        {
            Console.Write(vetor[i] + " ");
        }
        Console.WriteLine("\n");

        Array.Sort(vetor);
        //Imprimir vetor depois da ordenação
        for (int i = 0; i < vetor.Length; i++)
        {
            Console.Write(vetor[i] + " ");
        }
    }
}
