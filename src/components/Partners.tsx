export default function Partners() {
  const partners = [
    { name: 'Amazon', logo: 'amazon' },
    { name: 'Wipro', logo: 'wipro' },
    { name: 'Verizon', logo: 'verizon' },
    { name: 'Microsoft', logo: 'microsoft' },
    { name: 'Google', logo: 'google' },
    { name: 'Meta', logo: 'meta' },
    { name: 'IBM', logo: 'ibm' }
  ];

  return (
    <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Collaborations With Various Top Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <img 
                src={`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${partner.logo.toLowerCase()}.svg`}
                alt={partner.name}
                className="h-8 dark:invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}