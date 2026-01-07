return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className={`theme-${theme}`}>
      {children}
    </div>
  </ThemeContext.Provider>
);
